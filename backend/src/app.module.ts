import { Module } from '@nestjs/common';
import { AirqinoModule } from './airqino/airqino.module'; // Mettez à jour le chemin si nécessaire

@Module({
    imports: [AirqinoModule],
})
export class AppModule {}
