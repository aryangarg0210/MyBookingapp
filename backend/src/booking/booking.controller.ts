
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

  // Added for: fix: optimize slow sql aggregate query in booking metrics controller
  @Post('controller')
  async optimizeSlowSqlAggregateQueryInBookingMetricsController(@Body() dto: any) {
    this.logger.log('Executing optimizeSlowSqlAggregateQueryInBookingMetricsController');
    return this.service.optimizeSlowSqlAggregateQueryInBookingMetricsController(dto);
  }

  // Added for: fix: fix duplicate bookings submission double click race condition
  @Post('condition')
  async fixDuplicateBookingsSubmissionDoubleClickRaceCondition(@Body() dto: any) {
    this.logger.log('Executing fixDuplicateBookingsSubmissionDoubleClickRaceCondition');
    return this.service.fixDuplicateBookingsSubmissionDoubleClickRaceCondition(dto);
  }

  // Added for: refactor: optimize booking calendar range verification logic
  @Post('logic')
  async optimizeBookingCalendarRangeVerificationLogic(@Body() dto: any) {
    this.logger.log('Executing optimizeBookingCalendarRangeVerificationLogic');
    return this.service.optimizeBookingCalendarRangeVerificationLogic(dto);
  }

  // Added for: feat: add booking availability dates check query in service
  @Post('service')
  async addBookingAvailabilityDatesCheckQueryInService(@Body() dto: any) {
    this.logger.log('Executing addBookingAvailabilityDatesCheckQueryInService');
    return this.service.addBookingAvailabilityDatesCheckQueryInService(dto);
  }

  // Added for: fix: optimize slow sql aggregate query in booking metrics controller
  @Post('controller')
  async optimizeSlowSqlAggregateQueryInBookingMetricsController(@Body() dto: any) {
    this.logger.log('Executing optimizeSlowSqlAggregateQueryInBookingMetricsController');
    return this.service.optimizeSlowSqlAggregateQueryInBookingMetricsController(dto);
  }
