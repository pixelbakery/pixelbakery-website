const Store_VariantPicker = ({ variantGroups, value, onChange, ...passthrough }) => (
  <div {...passthrough}>
    {variantGroups.map((group) => (
      <div key={group.id}>
        <label
          className='cursor-pointer mr-3 text-wine text-lg font-semibold'
          htmlFor='variantPicker'
        >
          {group.name}:
        </label>
        <select
          name='variantPicker'
          id='variantPicker'
          className=' border-blue border-2 rounded-md bg-transparent cursor-pointer focus:border-blue-dark  focus:ring-blue-dark'
          onChange={(evt) => {
            onChange(group.id, evt.target.value)
          }}
        >
          <option
            value={null}
            className='cursor-pointer text-wine focus:border-blue-dark  focus:ring-blue-dark'
          >
            select
          </option>
          {group.options.map((option) => (
            <option
              value={option.id}
              key={option.id}
              className='cursor-pointer text-wine focus:border-blue-dark  focus:ring-blue-dark'
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    ))}
  </div>
)

export default Store_VariantPicker
