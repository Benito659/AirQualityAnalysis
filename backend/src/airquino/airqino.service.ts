import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

interface AirQualityData {
    timestamp: string;
    CO: number;
    T: number;
    "T. int.": number;
    NO2: number;
    O3: number;
    PM10: number;
    "PM2.5": number;
    RH: number;
}

interface StationHeader {
    station_name: string;
    station_lat: number;
    station_lon: number;
}

interface AirQualityResponse {
    header: StationHeader;
    data: AirQualityData[];
}

@Injectable()
export class AirqinoService {
    private readonly apiUrl = 'https://airqino-api.magentalab.it/v3/getStationHourlyAvg/283164601';

    constructor(private httpService: HttpService) {}

    async getAirQualityData(): Promise<AirQualityData[]> {
        const response = await lastValueFrom(this.httpService.get<AirQualityResponse>(this.apiUrl));
        const { data } = response.data;

        // Traitez ici les données comme vous le souhaitez
        return data; // Vous pouvez retourner seulement les données ou les traiter davantage
    }
}
