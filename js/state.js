const handler = {
  set: function (obj, prop, value) {
    obj[prop] = value;
    return true;
  },
};

export const $settings = new Proxy(
  {
    profiles: {},
    profile: null,
  },
  handler
);
