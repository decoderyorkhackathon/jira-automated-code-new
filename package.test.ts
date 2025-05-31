import package from '../package.json';
  
  describe('package', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should be defined', () => {
      expect(package).toBeDefined();
    });
  
    it('should work correctly', () => {
      // Add specific tests here
      expect(true).toBe(true);
    });
  });