export function getIPv4Address() {
  return new Promise((resolve, reject) => {
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((r) => resolve(r?.ip || null))
      .catch(() => reject(null));
  });
}

export function getIPv6Address() {
  return new Promise((resolve, reject) => {
    fetch("https://api6.ipify.org?format=json")
      .then((r) => r.json())
      .then((r) => resolve(r?.ip || null))
      .catch(() => reject(null));
  });
}
