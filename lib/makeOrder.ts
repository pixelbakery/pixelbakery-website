export function makeOrder({ live, values, billingSameAsShipping }: any) {
  const pwyw = live?.pay_what_you_want?.customer_set_price?.raw
  const pay_what_you_want = pwyw && pwyw > 0 ? pwyw : live?.subtotal.raw

  const shippingAddress = {
    name: 'Shipping',
    country: 'US',
    street: values.shipping.address,
    street_2: '',
    town_city: values.shipping.city,
    county_state: values.shipping.state,
    postal_zip_code: values.shipping.postalCode,
  }

  const newOrder = {
    line_items: live.line_items,
    customer: {
      firstname: values.firstName,
      lastname: values.lastName,
      email: values.email,
      phone: values.phoneNumber,
    },
    billing: billingSameAsShipping
      ? shippingAddress
      : {
          name: 'Billing',
          country: 'US',
          street: values.billing.address,
          street_2: '',
          town_city: values.billing.city,
          county_state: values.billing.state,
          postal_zip_code: values.billing.postalCode,
        },
    shipping: shippingAddress,
    fulfillment: {
      shipping_method: live.shipping.id,
    },
    pay_what_you_want,
  }
  console.log(values, newOrder)

  return newOrder
}
