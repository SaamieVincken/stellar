import { writable } from 'svelte/store';

export const star = writable( undefined );
export const phase = writable(undefined);
phase.subscribe(value => {
    console.log('Value of star store changed:', value);
});

