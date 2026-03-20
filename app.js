/**

 * Data Structure: Queue

 * High-performance implementation using an object-based pointer system.

 */

class Queue {

  constructor() {

    this.items = {};

    this.head = 0;

    this.tail = 0;

  }



  // Add item to the end of the queue

  enqueue(element) {

    this.items[this.tail] = element;

    this.tail++;

  }



  // Remove and return the front item

  dequeue() {

    if (this.isEmpty()) return null;

    const item = this.items[this.head];

    delete this.items[this.head]; // Memory management

    this.head++;

    return item;

  }



  // View the front item

  peek() {

    return this.isEmpty() ? null : this.items[this.head];

  }



  // Check if queue is empty

  isEmpty() {

    return this.tail - this.head === 0;

  }



  // Get current queue length

  size() {

    return this.tail - this.head;

  }

}



/**

 * Logic: PrinterQueue

 * Manages print jobs using the Queue data structure.

 */

class PrinterQueue {

  constructor() {

    this.queue = new Queue();

  }



  // Add a new print job

  addJob(documentName, pages) {

    const job = { documentName, pages };

    this.queue.enqueue(job);

    console.log(`[QUEUED] Added: "${documentName}" (${pages} pages).`);

  }



  // Process the next job in the FIFO order

  processJob() {

    if (this.queue.isEmpty()) {

      console.log("[ERROR] The printer queue is empty. No jobs to process.");

      return;

    }



    const currentJob = this.queue.dequeue();

    console.log(`[PRINTING] Now printing: "${currentJob.documentName}"...`);

    console.log(`[SUCCESS] Completed ${currentJob.pages} pages.`);

  }



  // Display all pending jobs

  printQueueStatus() {

    if (this.queue.isEmpty()) {

      console.log("\n--- Printer Queue: Empty ---\n");

      return;

    }



    console.log("\n--- Current Printer Queue Status ---");

    // Iterate through the internal items object using the pointers

    for (let i = this.queue.head; i < this.queue.tail; i++) {

      const job = this.queue.items[i];

      const position = i - this.queue.head + 1;

      console.log(`${position}. ${job.documentName} [${job.pages} pgs]`);

    }

    console.log("------------------------------------\n");

  }

}



// --- Test the Solution ---



const officePrinter = new PrinterQueue();



// 1. Adding jobs

officePrinter.addJob("Financial_Report_2025.pdf", 45);

officePrinter.addJob("Meeting_Notes.txt", 3);

officePrinter.addJob("Travel_Itinerary.docx", 2);



// 2. View queue status

officePrinter.printQueueStatus();



// 3. Process the first two jobs

officePrinter.processJob(); // Processes Financial Report

officePrinter.processJob(); // Processes Meeting Notes



// 4. View status again to see remaining job

officePrinter.printQueueStatus();



// 5. Process remaining job

officePrinter.processJob();



// 6. Attempt to process when empty

officePrinter.processJob();
