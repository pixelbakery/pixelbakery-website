import React from 'react'

const VariantSelector = ({ variantGroups, ...passthrough }) => (
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
        >
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

export default VariantSelector
