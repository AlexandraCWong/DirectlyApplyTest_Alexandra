import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-format-job',
  templateUrl: './format-job.component.html',
  styleUrls: ['./format-job.component.css']
})
export class FormatJobComponent implements OnInit {
  submitJob = false;
  rawJob = {
    title:'',
    rawDescription:''
  };
  // KEYWORDS
  overview = false;
  dutiesResponsibilities=false;

  containsKeywords=false;

  // Formatted description
  jobTitle = ''
  description = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  formatJob(){
    this.submitJob = true
    this.jobTitle = this.rawJob.title;

    // add new line after !
    let rawDescription = this.rawJob.rawDescription;
    let format0 = rawDescription.split("! ").join("!\n");

    // add new line after full stops
    let format1 = format0.split(". ").join(".\n");

    // add double new line after colons
    let format2 = format1.split(": ").join(":\n");

    // format lists by *
    let format3 = format2.split(' * ').join('\n - ');

    // add new line before links
    let format4 = format3.split('https').join('\nhttps');
    this.description = format4


    // format keywords
    let keywordsList = ['Overview', 'Duties & Responsibilities', 'Surroundings', 'Activity', 'Temperature',
                        'Noise level', 'Dress code', 'Schedule Options', 'Flexible shifts', 'Career advancement', 
                      'New skills', 'Free training', 'Team environment', 'Basic Qualifications', 'Requirements',
                      'Schedule options']

     for (const keyword of keywordsList){ //loop through keywords array
      if (this.description.includes(keyword)){
        let format5 = this.description.split(keyword).join('\n\n'+keyword.toUpperCase()+'\n') // convert to uppercase to highlight
        this.description = format5
      }
     }

    // remove the rogue full stops/colons
    let format6 = this.description.split('\n.\n').join('\n');
    let format7 = format6.split('\n:\n').join('\n');
    this.description = format7;
  
    console.log(this.description)

  }

  Reset(){
    this.submitJob = false;
    this.rawJob.title = '';
    this.rawJob.rawDescription = '';
    this.jobTitle = '';
    this.description = '';
  }
}
