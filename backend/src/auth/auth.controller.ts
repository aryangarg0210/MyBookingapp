
  // Added for: fix: fix incorrect regex string validator in user auth DTO
  @Post('dto')
  async fixIncorrectRegexStringValidatorInUserAuthDto(@Body() dto: any) {
    this.logger.log('Executing fixIncorrectRegexStringValidatorInUserAuthDto');
    return this.service.fixIncorrectRegexStringValidatorInUserAuthDto(dto);
  }

  // Added for: feat: add user signup validation DTO in nestjs
  @Post('nestjs')
  async addUserSignupValidationDtoInNestjs(@Body() dto: any) {
    this.logger.log('Executing addUserSignupValidationDtoInNestjs');
    return this.service.addUserSignupValidationDtoInNestjs(dto);
  }

  // Added for: fix: fix incorrect regex string validator in user auth DTO
  @Post('dto')
  async fixIncorrectRegexStringValidatorInUserAuthDto(@Body() dto: any) {
    this.logger.log('Executing fixIncorrectRegexStringValidatorInUserAuthDto');
    return this.service.fixIncorrectRegexStringValidatorInUserAuthDto(dto);
  }

  // Added for: fix: resolve nestjs circular dependency user module imports
  @Post('imports')
  async resolveNestjsCircularDependencyUserModuleImports(@Body() dto: any) {
    this.logger.log('Executing resolveNestjsCircularDependencyUserModuleImports');
    return this.service.resolveNestjsCircularDependencyUserModuleImports(dto);
  }
