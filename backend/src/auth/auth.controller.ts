
  // Added for: fix: fix incorrect regex string validator in user auth DTO
  @Post('dto')
  async fixIncorrectRegexStringValidatorInUserAuthDto(@Body() dto: any) {
    this.logger.log('Executing fixIncorrectRegexStringValidatorInUserAuthDto');
    return this.service.fixIncorrectRegexStringValidatorInUserAuthDto(dto);
  }
