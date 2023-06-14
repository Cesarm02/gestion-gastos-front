import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {

  constructor(private logService:LogService) { }

  ngOnInit(): void {
  }
  downloadBackup() {
    this.logService.obtenerBackup({ responseType: 'blob' })
      .subscribe(response => {
        const blob = new Blob([response], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'backup.sql';
        anchor.click();
        window.URL.revokeObjectURL(url);
      });
  }
}
