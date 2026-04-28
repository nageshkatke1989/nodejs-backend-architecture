type Listener = (payload: any) => Promise<void>;

class EventBus {
    private listeners: Record<string, Listener[]> = {};

    subscribe(event: string, listener: Listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }

    async publish(event: string, payload: any) {
        const handlers = this.listeners[event] || [];

        handlers.forEach(handler =>
            handler(payload).catch(console.error)
        )
    }
}

export const eventBus = new EventBus();