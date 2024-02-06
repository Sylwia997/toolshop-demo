import * as dotenv from 'dotenv';

dotenv.config({ override: true }); //nadpisuje zmienne srodowiskowe

function requireEnvVariable(envVariableName: string): string {
  const envVariableValue = process.env[envVariableName];
  if (envVariableValue === undefined) {
    throw new Error(`Environment variable ${envVariableName} is not set.`);
  }
  console.log(envVariableName, envVariableValue);
  return envVariableValue;
}

export const BASE_URL = requireEnvVariable('BASE_URL');
export const ADMIN_EMAIL = requireEnvVariable('ADMIN_EMAIL');
export const CUSTOMER_1_EMAIL = requireEnvVariable('CUSTOMER_1_EMAIL');
export const CUSTOMER_2_EMAIL = requireEnvVariable('CUSTOMER_2_EMAIL');
export const USER_PASSWORD = requireEnvVariable('USER_PASSWORD');
