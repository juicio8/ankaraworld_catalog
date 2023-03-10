import { fireEvent, render, screen } from '@testing-library/react'
import { MyContext } from '../../../context'
import Navbar from '../index'

jest.mock('next/router', () => require('next-router-mock'))

describe('Navbar', () => {
  test('Navbar logo shows', () => {
    render(<Navbar />)
    const NavbarLogo = screen.getAllByAltText('logo')
    expect(NavbarLogo[0]).toBeInTheDocument()
    expect(NavbarLogo[1]).toBeInTheDocument()
  })
  test('Navbar links shows', () => {
    render(<Navbar />)
    let NavbarLink = screen.getAllByText('Collection')
    expect(NavbarLink[0]).toBeInTheDocument()

    NavbarLink = screen.getAllByText('Contact Us')
    expect(NavbarLink[0]).toBeInTheDocument()

    NavbarLink = screen.getAllByText('Reviews')
    expect(NavbarLink[0]).toBeInTheDocument()
  })
  test('Should be able to type into search bar ', () => {
    render(<Navbar />)
    let searchbar = screen.getByPlaceholderText(
      /Search for products & categories/,
    )
    fireEvent.change(searchbar, { target: { value: 'laptop bag' } })
    expect(searchbar).toHaveValue('laptop bag')
  })
  test('Should render search box', async () => {
    render(
      <MyContext>
        <Navbar />
      </MyContext>,
    )
    let searchbar = screen.getByPlaceholderText(
      /Search for products & categories/,
    )
    fireEvent.change(searchbar, { target: { value: 'Onape' } })
    let searchBox = await screen.findByTestId('search-box')
    expect(searchBox).toBeInTheDocument()
  })
})
