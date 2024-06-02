# react-native-ip-address
A React Native library to fetch the public IP address using https://api.ipify.org

## Install
```
$ npm install --save react-native-ip-address
```

## Example
```
import { getIPv4Address, getIPv6Address } from 'react-native-ip-address';

// Function to display the IP addresses
async function displayIPAddresses() {
  try {
    const ipv4Address = await getIPv4Address();
    const ipv6Address = await getIPv6Address();

    console.log(`IPv4 Address: ${ipv4Address}`);
    console.log(`IPv6 Address: ${ipv6Address}`);
  } catch (error) {
    console.error('Failed to fetch IP addresses', error);
  }
}

// Call the function to display IP addresses
displayIPAddresses();
```