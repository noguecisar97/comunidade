import { all } from 'redux-saga/effects'
import { AllEffect, ForkEffect } from 'redux-saga/effects'

export default function* root(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([])
}
