import { getIPv4Address, getIPv6Address } from '.';

// Mocking fetch
global.fetch = jest.fn();

describe('IP Address Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch IPv4 address', async () => {
    const mockResponse = { ip: '123.456.789.101' };
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const ip = await getIPv4Address();
    expect(ip).toBe(mockResponse.ip);
    expect(fetch).toHaveBeenCalledWith('https://api.ipify.org?format=json');
  });

  it('should fetch IPv6 address', async () => {
    const mockResponse = { ip: '2001:0db8:85a3:0000:0000:8a2e:0370:7334' };
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const ip = await getIPv6Address();
    expect(ip).toBe(mockResponse.ip);
    expect(fetch).toHaveBeenCalledWith('https://api6.ipify.org?format=json');
  });

  it('should return null on fetch error for IPv4 address', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    const ip = await getIPv4Address();
    expect(ip).toBeNull();
    expect(fetch).toHaveBeenCalledWith('https://api.ipify.org?format=json');
  });

  it('should return null on fetch error for IPv6 address', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    const ip = await getIPv6Address();
    expect(ip).toBeNull();
    expect(fetch).toHaveBeenCalledWith('https://api6.ipify.org?format=json');
  });
});
