import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pdf-lector',
  templateUrl: './pdf-lector.component.html',
  styleUrls: ['./pdf-lector.component.css']
})

export class PdfLectorComponent implements OnInit {
  private reader: FileReader;
  private offlineUrl: string;
  offlinePdf: string | ArrayBuffer;
  pdfSrc: string;
  onlineUrl: string;

  constructor() {
    this.onlineUrl = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    this.offlinePdf = '/assets/pdf-test.pdf';
  }

  ngOnInit(): void {
    this.reader = new FileReader();
    this.loadStaticPdf();
  }

  /**
   * Cargamos un pdf de manera estatica
   */
  loadStaticPdf() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.offlineUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], {type: 'application/pdf'});
        this.reader.onload = (e: any) => {
          this.offlinePdf = e.target.result;
        };
        this.reader.readAsArrayBuffer(blob);
      }
    };
    xhr.send();
  }

  /**
   * Cargamos dinamicamente un PDF
   * @param $event Fichero cargado en el html
   */
  onFileSelected($event: any): void {
    const file: File = $event.target.files[0];
    this.reader.onload = (e: any) => {
      if (file.type === 'application/pdf') {
        this.pdfSrc = e.target.result;
      } else {
        alert('Tiene que ser un PDF');
      }
    };
    this.reader.readAsArrayBuffer(file);
  }
}
