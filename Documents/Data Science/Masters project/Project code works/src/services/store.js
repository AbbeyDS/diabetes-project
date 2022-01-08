import { createState } from '@hookstate/core';

export const testQuestion = createState(1);

export const userAge = createState(1);
export const userWeight = createState(1);
export const userHeight = createState(1);
export const userBmi = createState(1);
export const userGlucoseLevel = createState(1);
export const userInsulinLevel = createState(1);
export const userBloodPressure = createState(1);

export const userResult = createState({});
