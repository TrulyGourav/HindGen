// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizenModule } from './citizen/citizen.module';
import { databaseConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';


console.log("module file ran");
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig),
    CitizenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
