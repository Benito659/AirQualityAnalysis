import { Module } from '@nestjs/common';
import { AirqinoService } from './airqino.service';
import { AirqinoController } from './airqino.controller'; // Importation du contrôleur
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [AirqinoService],
    controllers: [AirqinoController], // Ajoutez le contrôleur ici
    exports: [AirqinoService],
})
export class AirqinoModule {}
