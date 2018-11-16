import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalized' })
export class TestPipe implements PipeTransform {

    transform(value: string): string {
        const result = value.toLowerCase();
        const parts = result.split(' ');
        for (let i = 0; i < parts.length; i++) {
            parts[i] = parts[i][0].toUpperCase() + parts[i].substr(1, parts[i].length - 1);
        }
        return parts.join(' ');
    }

}
