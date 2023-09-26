// enviroments
const environment: { [key: string]: { API_BASE_URL: string } } = {
  production: {
    API_BASE_URL: "",
  },
  development: {
    API_BASE_URL: "",
  },
};

const currentEnvironment = process.env.REACT_APP_ENV || "development";

export default environment[currentEnvironment];
