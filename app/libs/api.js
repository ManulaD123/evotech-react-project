import ky from "ky";
// creating an api instance
//api: this is the exported instance of ky configured with specific options. it can be reused across the application for making
export const api=ky.create({
prefixUrl: process.env.NEXT_PUBLIC_API_URI, // this prepends a base URL to every request made with this api instance.
timeout: 60000, // sets the maximum time (in milliseconds) a request can take before being aborted
retry: 0, // configures how many times a failed request shouldautomatically retry.
});