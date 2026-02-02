import {useSyncExternalStore} from "react";

function subscribe() {
    return () => {
    };
}

export function useIsClient() {
    return useSyncExternalStore(
        subscribe,
        () => true,  // Value on the client
        () => false  // Value on the server (hydration)
    );
}