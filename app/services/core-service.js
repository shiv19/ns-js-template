export class CoreService {
  constructor() {
    if (CoreService._instance) {
      throw new Error(
          'Use CoreService.getInstance() instead of new.'
      );
    }
  }

  static getInstance() {
    return CoreService._instance;
  }
}

CoreService._instance = new CoreService();