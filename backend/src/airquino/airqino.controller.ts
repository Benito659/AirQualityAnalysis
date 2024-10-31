import { Controller, Get } from '@nestjs/common';
import { AirqinoService } from './airqino.service'; // Vérifiez que le chemin est correct

@Controller('airquality')
export class AirqinoController {
    constructor(private readonly airqinoService: AirqinoService) {}

    @Get()
    async getAirQuality() {
        return this.airqinoService.getAirQualityData();
    }
}
