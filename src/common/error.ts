/**
 * Error that may get thrown if IPFS returns nothing for a given uri.
 * @public
 */
export class NotFoundError extends Error {
  /** @internal */
  constructor() {
    super("NOT_FOUND");
  }
}

/**
 * Error that may get thrown if an invalid address was passed
 * @public
 */
export class InvalidAddressError extends Error {
  /** @internal */
  constructor(address?: string) {
    super(
      address ? `'${address}' is an invalid address` : "Invalid address passed",
    );
  }
}

export class UploadError extends Error {
  /** @internal */
  constructor(message: string) {
    super(`UPLOAD_FAILED: ${message}`);
  }
}
