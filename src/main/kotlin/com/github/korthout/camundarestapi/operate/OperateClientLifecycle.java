package com.github.korthout.camundarestapi.operate;

import io.camunda.operate.CamundaOperateClient;
import io.camunda.operate.dto.*;
import io.camunda.operate.exception.OperateException;
import io.camunda.operate.search.SearchQuery;
import io.camunda.zeebe.model.bpmn.BpmnModelInstance;
import org.apache.hc.core5.http.Header;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.SmartLifecycle;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Supplier;

/**
 * Lifecycle implementation that also directly acts as a CamundaOperateClient by delegating all methods to the
 * CamundaOperateClient that is controlled (and kept in the delegate field)
 *
 * Copied from https://github.com/camunda/connector-sdk-inbound-webhook/blob/main/src/main/java/io/camunda/connector/inbound/operate/OperateClientLifecycle.java#L30
 * Can probably be imported from spring-zeebe when https://github.com/camunda-community-hub/spring-zeebe/issues/367 is resolved.
 */
@Component
public class OperateClientLifecycle extends CamundaOperateClient implements SmartLifecycle, Supplier<CamundaOperateClient> {

    public static final int PHASE = 22222;
    protected boolean autoStartup = true;
    protected boolean running = false;
    protected boolean runningInTestContext = false;

    protected final OperateClientFactory factory;
    protected CamundaOperateClient delegate;

    @Autowired
    public OperateClientLifecycle(final OperateClientFactory factory) {
        this.factory = factory;
    }

    /**
     * Allows to set the delegate being used manually, helpful for test cases
     */
    public OperateClientLifecycle(final CamundaOperateClient delegate) {
        this.factory = null;
        this.delegate = delegate;
    }

    @Override
    public void start() {
        if (factory!=null) {
            final var camundaOperateClient = factory.camundaOperateClient();
            if (camundaOperateClient.isPresent() ) {
                delegate = camundaOperateClient.get();
                this.running = true;
            }
        } else {
            // in test cases we have injected a delegate already
            this.running = true;
            runningInTestContext = true;
        }
    }

    @Override
    public void stop() {
        try {
            delegate = null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            running = false;
        }
    }


    @Override
    public CamundaOperateClient get() {
        if (!isRunning()) {
            throw new IllegalStateException("CamundaOperateClient is not yet created!");
        }
        return delegate;
    }

    @Override
    public boolean isAutoStartup() {
        return autoStartup;
    }


    @Override
    public boolean isRunning() {
        return running;
    }

    @Override
    public int getPhase() {
        return PHASE;
    }

    @Override
    public ProcessDefinition getProcessDefinition(Long key) throws OperateException {
        return get().getProcessDefinition(key);
    }

    @Override
    public List<ProcessDefinition> searchProcessDefinitions(SearchQuery query) throws OperateException {
        return get().searchProcessDefinitions(query);
    }

    @Override
    public String getProcessDefinitionXml(Long key) throws OperateException {
        return get().getProcessDefinitionXml(key);
    }

    @Override
    public BpmnModelInstance getProcessDefinitionModel(Long key) throws OperateException {
        return get().getProcessDefinitionModel(key);
    }

    @Override
    public ProcessInstance getProcessInstance(Long key) throws OperateException {
        return get().getProcessInstance(key);
    }

    @Override
    public List<ProcessInstance> searchProcessInstances(SearchQuery query) throws OperateException {
        return get().searchProcessInstances(query);
    }

    @Override
    public FlownodeInstance getFlownodeInstance(Long key) throws OperateException {
        return get().getFlownodeInstance(key);
    }

    @Override
    public List<FlownodeInstance> searchFlownodeInstances(SearchQuery query) throws OperateException {
        return get().searchFlownodeInstances(query);
    }

    @Override
    public Incident getIncident(Long key) throws OperateException {
        return get().getIncident(key);
    }

    @Override
    public List<Incident> searchIncidents(SearchQuery query) throws OperateException {
        return get().searchIncidents(query);
    }

    @Override
    public Variable getVariable(Long key) throws OperateException {
        return get().getVariable(key);
    }

    @Override
    public List<Variable> searchVariables(SearchQuery query) throws OperateException {
        return get().searchVariables(query);
    }

    @Override
    public String getOperateUrl() {
        return get().getOperateUrl();
    }

    @Override
    public void setOperateUrl(String operateUrl) {
        get().setOperateUrl(operateUrl);
    }

    @Override
    public Header getAuthHeader() {
        return get().getAuthHeader();
    }

    @Override
    public void setAuthHeader(Header authHeader) {
        get().setAuthHeader(authHeader);
    }

    @Override
    public void setTokenExpiration(int tokenExpiration) {
        get().setTokenExpiration(tokenExpiration);
    }
}