import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): { success: boolean, message: string } {
    return { success: true, message: 'Welcome to HindGen!' };
  }
}
