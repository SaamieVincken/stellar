import { writable } from 'svelte/store';
import "$lib/shared/StarClass.ts";
import {Star} from "$lib/shared/StarClass.ts";

export const star = writable(Star || null);