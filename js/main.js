const visa = `
    <svg width="46px" height="32px" viewBox="0 0 46 32" version="1.1" class="visa"
        xmlns="http://www.w3.org/2000/svg">
        <title>Icon / Visa</title>
        <g id="Icon-/-Visa" stroke="none" stroke-width="1" fill="none"
            fill-rule="evenodd">
            <rect id="Rectangle" x="0" y="0" width="45" height="32"></rect>
            <path
                d="M19.0482186,10.212345 L14.2044288,21.8184855 L11.0438002,21.8184855 L8.66028108,12.5558482 C8.51522066,11.9850986 8.38934813,11.7766074 7.94917803,11.5365149 C7.23116735,11.1449676 6.04420474,10.7773139 5,10.5495536 L5.07137893,10.212345 L10.1584712,10.212345 C10.806638,10.212345 11.3899497,10.6455135 11.5369289,11.3954653 L12.796038,18.1122744 L15.9071617,10.212345 L19.0482186,10.212345 Z M31.4320801,18.0290321 C31.4447441,14.9656368 27.2134315,14.7972253 27.2425971,13.4287366 C27.2514235,13.0121395 27.646694,12.5697219 28.5105326,12.4560344 C28.9395737,12.4001542 30.1192449,12.3566061 31.4589431,12.9759137 L31.9831561,10.5148693 C31.2639942,10.2520393 30.3379868,10 29.1867137,10 C26.2317793,10 24.1518125,11.5777507 24.1341596,13.8368553 C24.1157393,15.5078682 25.6189182,16.43972 26.7521547,16.9954397 C27.9164757,17.5642623 28.3079085,17.9284476 28.3029197,18.4375361 C28.2952445,19.2163915 27.3734585,19.5597662 26.514225,19.5732545 C25.0106622,19.5971482 24.138381,19.1659066 23.443012,18.8406449 L22.9011461,21.3833901 C23.5995851,21.7059541 24.8886273,21.9857409 26.2264067,22 C29.3666961,22 31.4217186,20.4415184 31.4320801,18.0290321 L31.4320801,18.0290321 Z M39.2346419,21.8184855 L42,21.8184855 L39.5869315,10.212345 L37.0341752,10.212345 C36.4604574,10.212345 35.9765389,10.5476267 35.7612508,11.0640375 L31.2758907,21.8184855 L34.4154125,21.8184855 L35.0386351,20.0854262 L38.8746772,20.0854262 L39.2346419,21.8184855 Z M35.8990199,17.706468 L37.4728102,13.3481919 L38.3788622,17.706468 L35.8990199,17.706468 Z M23.3202095,10.212345 L20.8480423,21.8184855 L17.858186,21.8184855 L20.3311207,10.212345 L23.3202095,10.212345 Z"
                id="Fill-114" fill="#1A1F70"></path>
        </g>
    </svg>
`

const mastercard = `
    <svg width="46px" height="32px" viewBox="0 0 46 32" version="1.1" class="mastercard"
        xmlns="http://www.w3.org/2000/svg">
        <title>Icon / Mastercard</title>
        <g id="Icon-/-Mastercard" stroke="none" stroke-width="1" fill="none"
            fill-rule="evenodd">
            <rect id="Rectangle" x="0" y="0" width="45" height="32"></rect>
            <g id="Group" transform="translate(6.000000, 5.000000)" fill-rule="nonzero">
                <rect id="Rectangle" fill="#FF5F00" x="12.54772" y="2.28070018"
                    width="9.3007539" height="16.7722667">
                </rect>
                <path
                    d="M13.1383031,10.6668335 C13.1353254,7.39388823 14.6324361,4.30139672 17.1981265,2.28070018 C12.8401009,-1.15681203 6.58132597,-0.656494945 2.82056827,3.43002062 C-0.940189425,7.51653618 -0.940189425,13.8171308 2.82056827,17.9036464 C6.58132597,21.990162 12.8401009,22.4904791 17.1981265,19.0529668 C14.6324537,17.032256 13.1353475,13.9397737 13.1383031,10.6668335 Z"
                    id="Path" fill="#EB001B"></path>
                <path
                    d="M34.3957224,10.6668335 C34.3957224,14.7505828 32.0724653,18.4759518 28.412235,20.2608047 C24.7520047,22.0456576 20.3975314,21.5766504 17.1981265,19.0529668 C19.761422,17.0303355 21.2579208,13.9390855 21.2579208,10.6668335 C21.2579208,7.39458148 19.761422,4.30333154 17.1981265,2.28070018 C20.3975314,-0.242983375 24.7520047,-0.711990575 28.412235,1.07286235 C32.0724653,2.85771527 34.3957224,6.58308421 34.3957224,10.6668335 L34.3957224,10.6668335 Z"
                    id="Path" fill="#F79E1B"></path>
            </g>
        </g>
    </svg>
`

const MIN_YEAR = new Date().getFullYear() % 100

const formData = {
  senderStep: {
    senderCardNumber: {
      value: null,
      valid: false
    },
    expiry_month: {
      value: null,
      valid: false
    },
    expiry_year: {
      value: null,
      valid: false
    },
    cvv: {
      value: null,
      valid: false
    }
  },
  amountStep: {
    amount: {
      value: null,
      valid: false
    }
  },
  receiverStep: {
    receiver: {
      value: null,
      valid: false
    }
  }
}

const getCardTypeIcon = (name) => {
  switch (name) {
    case 'mastercard':
      return mastercard
    case 'visa':
      return visa
    default:
      return ''
  }
}

const formatCardNumber = (value) => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
  const onlyNumbers = value.replace(/[^\d]/g, '')

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(' ')
  )
}

const formatTwoDigit = (num) => {
  return num.toString().length === 1 ? `0${num}` : num
}

const formatCurrency = (value) => {
  const num = Number(value)
  return num ? `${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}` : value
}

const formatValidSteps = () => {
  const steps = Object.keys(formData)
  steps.forEach((step, i) => {
    if (isValidStep(step)) {
      $(`#dot-${i}`).addClass('dot-valid')
    }
  })
}

const formatNextSteps = (fromIndex) => {
  const total = swiper.slides.length
  for (let i = fromIndex + 1; i < total; i++) {
    $(`#dot-${i}`).removeClass('dot-valid')
    if (i !== fromIndex + 1) {
      $(`#dot-${i}`).removeClass('dot-available')
    }
  }
}

const isAllValid = () => {
  const isValid = Object.keys(formData).every((step) => isValidStep(step))
  return isValid
}

const isValidStep = (step) => {
  const stepValues = Object.keys(formData[step])
  const isValid = stepValues.every((valueKey) => {
    const { valid } = formData[step][valueKey]

    return valid
  })
  return isValid
}

const validateForm = (currentSlideIndex = swiper.activeIndex) => {
  if (isAllValid()) {
    enableSubmitButton()
  } else {
    disableSubmitButton()
  }

  const steps = Object.keys(formData)
  const currentStep = steps[currentSlideIndex]

  if (isValidStep(currentStep)) {
    enableNextButton()
    swiper.allowSlideNext = true
    $(`#dot-${currentSlideIndex}`).addClass('dot-valid')
    $(`#dot-${currentSlideIndex + 1}`).addClass('dot-available')
  } else {
    disableNextButton()
    swiper.allowSlideNext = false
    $(`#dot-${currentSlideIndex}`).removeClass('dot-valid')
    $(`#dot-${currentSlideIndex + 1}`).removeClass('dot-available')
  }
}

const isValidFormData = () => {
  const {
    senderStep: { senderCardNumber, expiry_month, expiry_year, cvv },
    amountStep: { amount },
    receiverStep: { receiver }
  } = formData

  const isSenderCardNumberValid = /^[0-9]{16}$/g.test(
    senderCardNumber.value.replaceAll(' ', '')
  )
  const isMonthValid =
    parseInt(expiry_month.value) >= 1 && parseInt(expiry_month.value) <= 12
  const isYearValid =
    parseInt(expiry_year.value) >= MIN_YEAR &&
    parseInt(expiry_year.value) <= 99
  const isCvvValid = /^[0-9]{3}$/g.test(cvv.value)
  const isAmountValid =
    parseFloat(amount.value) > 0 && parseFloat(amount.value) <= 99999
  const isreceiverValid = /^[0-9]{16}$/g.test(
    receiver.value.replaceAll(' ', '')
  )

  return (
    isSenderCardNumberValid &&
    isMonthValid &&
    isYearValid &&
    isCvvValid &&
    isAmountValid &&
    isreceiverValid
  )
}

const validateMonth = (month, year) => {
  let minMonth = null
  const isCurrentYear =
    (year || formData.senderStep.expiry_year.value) === MIN_YEAR

  if (isCurrentYear) {
    minMonth = new Date().getMonth() + 1
  }

  const isValidRange = month >= 1 && month <= 12
  const isValidMonth = minMonth
    ? month >= minMonth && isValidRange
    : isValidRange

  return isValidMonth
}

const disableNextButton = () => {
  $('.next-button').attr('disabled', true)
  $('.next-button').addClass('btn-disabled')
}

const enableNextButton = () => {
  $('.next-button').removeAttr('disabled')
  $('.next-button').removeClass('btn-disabled')
}

const hideNextButton = () => {
  $('.next-button').addClass('hidden')
}

const showNextButton = () => {
  $('.next-button').removeClass('hidden')
}

const disableSubmitButton = () => {
  $('button[name="submitTransfer"]').attr('disabled', true)
  .addClass('btn-disabled')
}

const enableSubmitButton = () => {
  $('button[name="submitTransfer"]').removeAttr('disabled')
  $('button[name="submitTransfer"]').removeClass('btn-disabled')
}

const changeActiveDot = (prevIndex, activeIndex) => {
  $(`#dot-${prevIndex}`).removeClass('swiper-dot-active')
  $(`#dot-${activeIndex}`).addClass('swiper-dot-active')
}

const swiper = new Swiper('.swiper', {
  allowSlideNext: false,
  centeredSlides: true,
  speed: 1000,
  longSwipes: false
})

swiper.on('slideChange', (swiper) => {
  validateForm()
  formatValidSteps()

  if (swiper.previousIndex > swiper.activeIndex) {
    const currentSlideIndex = swiper.activeIndex

    formatNextSteps(currentSlideIndex)
  }

  changeActiveDot(swiper.previousIndex, swiper.activeIndex)

  const lastSlideIndex = swiper.slides.length - 1

  if (swiper.activeIndex === lastSlideIndex) {
    hideNextButton()
  } else {
    showNextButton()
  }
})

$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
  $('.loader').addClass('hidden')

  $('.next-button').on('click', function () {
    swiper.slideNext()
    changeActiveDot(swiper.previousIndex, swiper.activeIndex)
  })

  $('.swiper-dot').on('click', function (e) {
    if (e?.target?.attributes['data-index']?.value) {
      const index = parseInt(e.target.attributes['data-index'].value)
      const currentSlideIndex = swiper.activeIndex
      const isDirectionNext = index > currentSlideIndex

      if (!isDirectionNext) {
        swiper.slideTo(index)
        changeActiveDot(currentSlideIndex, index)
      } else {
        if (index - currentSlideIndex === 1 && swiper.allowSlideNext) {
          swiper.slideTo(index)
          changeActiveDot(currentSlideIndex, index)
        }
      }
    }
  })

  $('input[name="senderCardNumber"], input[name="receiver"]').on(
    'keydown',
    function (e) {
      const keycode = e.keyCode
      if (e.shiftKey == true) return false
      if (
        (keycode >= 48 && keycode <= 57) ||
        (keycode >= 96 && keycode <= 105)
      ) {
        return true
      }

      if ([8, 9, 110, 39, 37, 46].indexOf(keycode) >= 0) {
        return true
      }

      if (
        (keycode == 65 ||
          keycode == 67 ||
          keycode == 86 ||
          keycode == 88 ||
          keycode == 90) &&
        (e.ctrlKey === true || e.metaKey === true)
      ) {
        return true
      }

      return false
    }
  )

  $('input[name="senderCardNumber"]').on(
    'keyup keypress input change',
    function () {
      let s = this.selectionStart,
        e = this.selectionEnd
      const oldleft = $(this).val().substr(0, s).replace(/[^ ]/g, '').length
      $(this).val(function (index, value) {
        return formatCardNumber(value.replace(/\W/gi, ''))
      })
      const newleft = $(this).val().substr(0, s).replace(/[^ ]/g, '').length
      s += newleft - oldleft
      e += newleft - oldleft
      this.setSelectionRange(s, e)

      const senderCard = $(this).validateCreditCard()
      const receiverCard = $(
        'input[name="receiver"]'
      ).validateCreditCard()
      const receiverCardValue = $('input[name="receiver"]').val()

      const isValidSenderCardNum =
        senderCard?.valid &&
        this.value !== formData.receiverStep.receiver.value

      const isValidReceiverCardNum =
        receiverCard?.valid && receiverCardValue !== this.value

      formData.senderStep.senderCardNumber = {
        value: this.value,
        valid: isValidSenderCardNum
      }

      formData.receiverStep.receiver = {
        value: receiverCardValue,
        valid: isValidReceiverCardNum
      }

      const isReceiverCardNumEmpty = !receiverCardValue.length

      $('input[name="senderCardNumber"]').
        addClass(`${isValidSenderCardNum ? 'valid' : 'invalid'}`).
        removeClass(`${isValidSenderCardNum ? 'invalid' : 'valid'}`)

      $('input[name="receiver"]').addClass(
        `${
          isValidReceiverCardNum
            ? 'valid'
            : !isReceiverCardNumEmpty
              ? 'invalid'
              : ''
        }`
      ).removeClass(`${isValidReceiverCardNum ? 'invalid' : 'valid'}`)

      $('#senderCard i').html(getCardTypeIcon(senderCard?.card_type?.name))
      $('input[name="senderCardNumber"]').each((index, element) => {
        $(element).val(this.value)
      })
      //disabling receiver on invalid sender card
      if($('input[name="amount"]').val() > 0 && isValidSenderCardNum) $('input[name="receiver"]').prop('disabled', false)
      else $('input[name="receiver"]').prop('disabled', true)
      validateForm()
    }
  )

  $('input[name="expiry_month"], input[name="expiry_year"]').on(
    'change',
    function () {
      if (!parseInt(this.value)) {
        $(this).val('')
      } else {
        $(this).val(function (index, value) {
          return formatTwoDigit(value)
        })
      }
    }
  )

  $('input[name="expiry_month"]').on('input', function () {
    $(this).val(function (index, value) {
      return value.replace(/[^0-9]/g, '')
    })

    const parsedMonth = parseInt(this.value)
    const isValidMonth = validateMonth(parsedMonth)

    formData.senderStep.expiry_month = {
      value: parsedMonth,
      valid: isValidMonth
    }

    $('input[name="expiry_month"]').val(this.value)
    $('input[name="expiry_month"]').
      addClass(`${isValidMonth ? 'valid' : 'invalid'}`).
      removeClass(`${isValidMonth ? 'invalid' : 'valid'}`)

    validateForm()
    //chaining expiry dates
    isValidMonth && this.value.length === 2 && $( 'input[name="expiry_year"]' ).focus();
  })

  $('input[name="expiry_year"]').on('input', function () {
    $(this).val(function (index, value) {
      return value.replace(/[^0-9]/g, '')
    })

    const parsedYear = parseInt(this.value)
    const isValidYear = parsedYear >= MIN_YEAR && parsedYear <= 99

    const parsedMonth = parseInt($('input[name="expiry_month"]').val())
    const isValidMonth = validateMonth(parsedMonth, parsedYear)

    formData.senderStep.expiry_month = {
      value: parsedMonth,
      valid: isValidMonth
    }
    formData.senderStep.expiry_year = {
      value: parsedYear,
      valid: isValidYear
    }

    $('input[name="expiry_month"]').
      addClass(`${isValidMonth ? 'valid' : 'invalid'}`).
      removeClass(`${isValidMonth ? 'invalid' : 'valid'}`)

    $('input[name="expiry_year"]').val(this.value)
    $('input[name="expiry_year"]').
      addClass(`${isValidYear ? 'valid' : 'invalid'}`).
      removeClass(`${isValidYear ? 'invalid' : 'valid'}`)

    validateForm()
  })

  $('input[name="cvv"]').on('input', function () {
    $(this).val(function (index, value) {
      return value.replace(/[^0-9]/g, '')
    })

    const isValidCVV = this.value.length === 3

    formData.senderStep.cvv = {
      value: this.value,
      valid: isValidCVV
    }

    $('input[name="cvv"]').val(this.value)
    $('input[name="cvv"]').
      addClass(`${isValidCVV ? 'valid' : 'invalid'}`).
      removeClass(`${isValidCVV ? 'invalid' : 'valid'}`)

    validateForm()
  })

  $('input[name="amount"]').on('change', function () {
    const validFloat = this.value.replace(',', '.')
    const parsedAmount = parseFloat(validFloat)

    if (!parsedAmount) {
      $('input[name="amount"]').val('')
      return
    }

    $('input[name="amount"]').val(formatCurrency(parsedAmount))
  })

  $('input[name="amount"]').on('keydown', function (e) {
    const keycode = e.which || e.keyCode || 0
    if (e.shiftKey == true || e.ctrlKey == true) return false
    if (
      [8, 9, 39, 37, 46].indexOf(keycode) >= 0 || // allow tab, dot, left and right arrows, deconste keys
      (keycode == 190 &&
        this.value.indexOf('.') === -1 &&
        this.value.indexOf(',') === -1) || // allow dot if not exists in the value
      (keycode == 110 &&
        this.value.indexOf('.') === -1 &&
        this.value.indexOf(',') === -1) || // allow dot if not exists in the value
      (keycode == 188 &&
        this.value.indexOf(',') === -1 &&
        this.value.indexOf('.') === -1) || // allow comma if not exists in the value
      (((keycode >= 48 && keycode <= 57) ||
          (keycode >= 96 && keycode <= 105)) &&
        this.value !== '0') // allow numbers if first number is not zero
    ) {
      // allow numpad numbers
      // check for the decimals after dot and prevent any digits
      const isUsingDot = this.value.indexOf('.') !== -1
      const parts = isUsingDot ? this.value.split('.') : this.value.split(',')
      const decimalIndex = isUsingDot
        ? this.value.indexOf('.')
        : this.value.indexOf(',')
      const cursorStartIndex = e.target.selectionStart
      const cursorEndIndex = e.target.selectionEnd

      if (
        cursorStartIndex > decimalIndex && // only prevent input after decimal
        parts.length > 1 && // has decimals
        parts[1].length >= 2 && // should limit this
        ((keycode >= 48 && keycode <= 57) || (keycode >= 96 && keycode <= 105)) // requested key is a digit
      ) {
        return false
      } else {
        if (keycode == 110) {
          this.value += '.'
          return false
        }
        if (keycode == 188) {
          this.value += '.'
          return false
        }

        // prevent inputing numbers after zero if amount has decimal numbers
        if (
          cursorStartIndex !== 0 &&
          cursorStartIndex === cursorEndIndex &&
          cursorStartIndex <= decimalIndex &&
          parts[0] === '0' &&
          ((keycode >= 48 && keycode <= 57) ||
            (keycode >= 96 && keycode <= 105))
        ) {
          return false
        }

        // prevent inputing zero at first index if amount has decimal numbers
        if (
          keycode == 48 &&
          cursorStartIndex === 0 &&
          cursorStartIndex === cursorEndIndex &&
          parts.length > 1 &&
          parts[0] !== ''
        ) {
          return false
        }

        return true
      }
    } else {
      return false
    }
  })

  $('input[name="amount"]').on('input', function () {
    const validFloat = this.value.replace(',', '.')
    const value =
      parseFloat(validFloat) > 99999.99 ? this.value.slice(0, -1) : this.value
    const parsedAmount = parseFloat(validFloat)

    const isValidAmount = parsedAmount > 0

    formData.amountStep.amount = {
      value: parsedAmount,
      valid: isValidAmount
    }

    $('input[name="amount"]').val(value)
    $('input[name="amount"]').
      addClass(`${isValidAmount ? 'valid' : 'invalid'}`).
      removeClass(`${isValidAmount ? 'invalid' : 'valid'}`)
    //disabling receiver input on invalid amount
    if(this.value > 0 && formData.senderStep.senderCardNumber.valid) $('input[name="receiver"]').prop('disabled', false)
    else $('input[name="receiver"]').prop('disabled', true)
    validateForm()
  })

  $('input[name="receiver"]').on(
    'keyup keypress input change',
    function () {
      let s = this.selectionStart,
        e = this.selectionEnd
      const oldleft = $(this).val().substr(0, s).replace(/[^ ]/g, '').length
      $(this).val(function (index, value) {
        return formatCardNumber(value.replace(/\W/gi, ''))
      })
      const newleft = $(this).val().substr(0, s).replace(/[^ ]/g, '').length
      s += newleft - oldleft
      e += newleft - oldleft
      this.setSelectionRange(s, e)

      const receiverCard = $(this).validateCreditCard()
      const senderCard = $(
        'input[name="senderCardNumber"]'
      ).validateCreditCard()
      const senderCardValue = $('input[name="senderCardNumber"]').val()

      const isValidSenderCardNum =
        senderCard?.valid && senderCardValue !== this.value

      const isValidReceiverCardNum =
        receiverCard?.valid && this.value !== senderCardValue

      formData.senderStep.senderCardNumber = {
        value: senderCardValue,
        valid: isValidSenderCardNum
      }

      formData.receiverStep.receiver = {
        value: this.value,
        valid: isValidReceiverCardNum
      }

      const isSenderCardNumEmpty = !senderCardValue.length

      $('input[name="senderCardNumber"]').addClass(
        `${
          isValidSenderCardNum
            ? 'valid'
            : !isSenderCardNumEmpty
              ? 'invalid'
              : ''
        }`
      ).removeClass(`${isValidSenderCardNum ? 'invalid' : 'valid'}`)

      $('input[name="receiver"]').
        addClass(`${isValidReceiverCardNum ? 'valid' : 'invalid'}`).
        removeClass(`${isValidReceiverCardNum ? 'invalid' : 'valid'}`)

      $('#receiverCard i').html(getCardTypeIcon(receiverCard?.card_type?.name))
      $('input[name="receiver"]').each((index, element) => {
        $(element).val(this.value)
      })

      validateForm()
    }
  )

  $('.credential-container input').on('focus', function () {
    $(this).select()
  })


  // აქ დაემატა კლასი .text-pay გადასატანია
  $('button[name="submitTransfer"]').on("click", function () {
    $('.text-pay').addClass("text-indent");
    $(".loader").removeClass("hidden");

    if (isValidFormData()) {
      setTimeout(() => {
        $(".loader").addClass("hidden");
        $('.text-pay').removeClass("text-indent");
        alert("Transfer Successful!");
      }, 1000);
    } else {
      alert("Invalid Data!");
    }
  });

  $(".credential-container input").on("focus", function () {
    $(this).select();
  });
})


