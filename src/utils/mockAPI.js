export const mockAPI = (data, s = 2) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (window.navigator.onLine) {
        return resolve({ status: 200, message: 'Success', data });
      }
      reject(new Error("Couldn't reach server. Try again later."));
    }, s * 1000)
  );
