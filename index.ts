// Response type for IP address API
interface IPResponse {
  ip: string;
}

// Function to get IPv4 address
export async function getIPv4Address(): Promise<string | null> {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data: IPResponse = await response.json();
    return data?.ip || null;
  } catch (error) {
    console.error('Failed to fetch IPv4 address:', error);
    return null;
  }
}

// Function to get IPv6 address
export async function getIPv6Address(): Promise<string | null> {
  try {
    const response = await fetch("https://api6.ipify.org?format=json");
    const data: IPResponse = await response.json();
    return data?.ip || null;
  } catch (error) {
    console.error('Failed to fetch IPv6 address:', error);
    return null;
  }
}
