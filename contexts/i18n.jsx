// Context API with Duck Pattern and Redux Behaviour //
import React from 'react'
import { Factory } from './Factory'

// i18n data
import en from '../i18n/en'
import fr from '../i18n/fr'

// Initial State
const initialState = {
  constants: en,
}

// Types
const TYPES = {
  EN: 'en',
  FR: 'fr',
}

// Reducer Function
function reducer(state, { type, payload }) {
  switch (type) {
    case TYPES.EN:
    case TYPES.FR:
      // handled with immer.
      state.constants = payload
      return state 
    default:
      return state
  }
}

// ContextFactory { Store, Provider, useSotre, useDispatch, useI18nSelector }
export const {
  Provider: I18nContextProvider,
  useDispatch: useI18nDispatch,
  useSelector: useI18nSelector,
} = Factory(initialState, reducer)

// Actions
export function usingFrenshAsLangAction() {
  return { type: TYPES.FR, payload: fr }
}

export function usingEnglishAsLangAction() {
  return { type: TYPES.EN, payload: en }
}
