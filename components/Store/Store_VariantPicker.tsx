import React from 'react'

const Store_VariantPicker = ({ variantGroups, value, onChange, ...passthrough }) => (
  <div {...passthrough}>
    {variantGroups.map((group) => (
      <div key={group.id}>
        <label className='mr-3 text-wine text-lg font-semibold' htmlFor='variantPicker'>
          {group.name}:
        </label>
        <select
          name='variantPicker'
          id='variantPicker'
          className='border border-blue rounded-md bg-transparent'
          onChange={(evt) => {
            onChange(group.id, evt.target.value)
          }}
        >
          <option value={null}>select</option>
          {group.options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    ))}
  </div>
)

export default Store_VariantPicker
