import {
  ElectronicsPage,
  JeweleryPage,
  ProductPage,
  ProfilePage,
  PaymentPage,
  SigninPage,
  SignupPage,
  SearchPage,
  WomenPage,
  HomePage,
  MenPage
} from '@/pages'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/shared/components/ui/toaster'
import ReactDOM from 'react-dom/client'
import { MainLayout } from '@/layouts'
import React from 'react'
import '@/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<SigninPage />} path="/signin" />
            <Route element={<SignupPage />} path="/signup" />
            <Route element={<HomePage />} path="/" />
            <Route element={<MenPage />} path="/men" />
            <Route element={<WomenPage />} path="/women" />
            <Route element={<ElectronicsPage />} path="/electronics" />
            <Route element={<JeweleryPage />} path="/jewelry" />
            <Route element={<ProductPage />} path="/product/:id" />
            <Route element={<ProfilePage />} path="/profile" />
            <Route element={<PaymentPage />} path="/payment" />
            <Route element={<SearchPage />} path="/search" />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
)
