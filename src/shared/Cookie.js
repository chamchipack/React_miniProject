const getCookie = (name) => {
  let value = "; "+document.cookie;

  let parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const setCookie = (cookieName, sessionName, sessionValue, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${cookieName}=${sessionValue}; expires=${date.toUTCString()}`;
  sessionStorage.setItem(sessionName, sessionValue);
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  console.log(date);
  const cookie = getCookie(name);
  console.log(cookie)
  sessionStorage.removeItem(cookie);
  document.cookie = name+"=; expires="+date;
  
};

export { getCookie, setCookie, deleteCookie };
