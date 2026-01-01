
  // Added for: fix: fix duplicate bookings submission double click race condition
  @Post('condition')
  async fixDuplicateBookingsSubmissionDoubleClickRaceCondition(@Body() dto: any) {
    this.logger.log('Executing fixDuplicateBookingsSubmissionDoubleClickRaceCondition');
    return this.service.fixDuplicateBookingsSubmissionDoubleClickRaceCondition(dto);
  }
