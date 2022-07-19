/*Exercise: Let's challenge ourselves to make an event processing engine using generics and mapped types.
Link: https://www.youtube.com/watch?v=7o1P-SB7yQw&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&index=21&t=200s
https://gist.github.com/jherr/23101f2cd7980a7839a76b6bdff45583*/



/*
class EventProcessor {
    handleEvent(eventName: ..., data: ...): void {
    }

    addFilter(
        eventName: ...,
        filter: (data: ...) => boolean
    ): void {
    }

    addMap(eventName: ..., map: (data: ...) => ...): void {
    }

    getProcessedEvents() {
    }
}

interface EventMap {
    login: { user?: string; name?: string; hasSession?: boolean };
    logout: { user?: string };
}

class UserEventProcessor extends EventProcessor<EventMap> { }

const uep = new UserEventProcessor();

uep.addFilter("login", ({ user }) => Boolean(user));

uep.addMap("login", (data) => ({
    ...data,
    hasSession: Boolean(data.user && data.name),
}));

uep.handleEvent("login", {
    user: null,
    name: "jack",
});
uep.handleEvent("login", {
    user: "tom",
    name: "tomas",
});
uep.handleEvent("logout", {
    user: "tom",
});

console.log(uep.getProcessedEvents());

/*
Result:
[
  {
    eventName: 'login',
    data: { user: 'tom', name: 'tomas', hasSession: true }
  },
  { eventName: 'logout', data: { user: 'tom' } }
]
*/