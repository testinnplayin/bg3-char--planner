export interface UseCase<UseCaseRequest, UseCaseResponse> {
  execute: (request: UseCaseRequest) => UseCaseResponse;
}
