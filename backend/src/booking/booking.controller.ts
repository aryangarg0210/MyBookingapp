
  // Added for: fix: fix duplicate bookings submission double click race condition
  @Post('condition')
  async fixDuplicateBookingsSubmissionDoubleClickRaceCondition(@Body() dto: any) {
    this.logger.log('Executing fixDuplicateBookingsSubmissionDoubleClickRaceCondition');
    return this.service.fixDuplicateBookingsSubmissionDoubleClickRaceCondition(dto);
  }

  // Added for: fix: optimize slow sql aggregate query in booking metrics controller
  @Post('controller')
  async optimizeSlowSqlAggregateQueryInBookingMetricsController(@Body() dto: any) {
    this.logger.log('Executing optimizeSlowSqlAggregateQueryInBookingMetricsController');
    return this.service.optimizeSlowSqlAggregateQueryInBookingMetricsController(dto);
  }
