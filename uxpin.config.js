module.exports = {
  components: {
    categories: [
      {
        name: 'HTML',
        include: [
          'src/components/HtmlTag/HtmlTag.jsx',
          'src/components/Typography/Typography.jsx',
        ]
      },

      {
        name: 'LAYOUT',
        include: [
          "src/components/Container/Container.jsx",
          "src/components/Row/Row.jsx",
          "src/components/Col/Col.jsx",
          "src/components/Stack/Stack.jsx",
        ]
      },
      {
        name: 'FORMS',
        include: [
          "src/components/Form/Form.jsx",
          "src/components/FormGroup/FormGroup.jsx",
          "src/components/InputGroup/InputGroup.jsx",
          "src/components/FormControl/FormControl.jsx",
          "src/components/FormCheck/FormCheck.jsx",
          "src/components/FormSelect/FormSelect.jsx",
          "src/components/FormRange/FormRange.jsx",
          "src/components/FormText/FormText.jsx",
          "src/components/FormLabel/FormLabel.jsx",
          "src/components/FormFloating/FormFloating.jsx",
          "src/components/InputGroupText/InputGroupText.jsx",


          // "src/components/FormCheckInput/FormCheckInput.jsx",
          // "src/components/FormCheckLabel/FormCheckLabel.jsx",
        ]
      },
      {
        name: 'Completed',
        include: [

          'src/components/Accordion/Accordion.jsx',
          'src/components/AccordionBody/AccordionBody.jsx',

          'src/components/AccordionButton/AccordionButton.jsx',
          'src/components/AccordionCollapse/AccordionCollapse.jsx',
          'src/components/AccordionHeader/AccordionHeader.jsx',
          'src/components/AccordionItem/AccordionItem.jsx',

          'src/components/Alert/Alert.jsx',
          "src/components/AlertLink/AlertLink.jsx",
          "src/components/AlertHeading/AlertHeading.jsx",
          'src/components/Badge/Badge.jsx',

          "src/components/Breadcrumb/Breadcrumb.jsx",
          "src/components/BreadcrumbItem/BreadcrumbItem.jsx",

          "src/components/Button/Button.jsx",
          "src/components/ButtonGroup/ButtonGroup.jsx",
          "src/components/ButtonToolbar/ButtonToolbar.jsx",

          "src/components/ToggleButton/ToggleButton.jsx",
          "src/components/ToggleButtonGroup/ToggleButtonGroup.jsx",

          "src/components/Card/Card.jsx",
          "src/components/CardBody/CardBody.jsx",
          "src/components/CardFooter/CardFooter.jsx",
          "src/components/CardGroup/CardGroup.jsx",
          "src/components/CardHeader/CardHeader.jsx",
          "src/components/CardImg/CardImg.jsx",
          "src/components/CardImgOverlay/CardImgOverlay.jsx",
          "src/components/CardLink/CardLink.jsx",
          "src/components/CardSubtitle/CardSubtitle.jsx",
          "src/components/CardTitle/CardTitle.jsx",
          "src/components/CardText/CardText.jsx",

          "src/components/Image/Image.jsx",

          "src/components/Spinner/Spinner.jsx",

          "src/components/Carousel/Carousel.jsx",
          "src/components/CarouselCaption/CarouselCaption.jsx",
          "src/components/CarouselItem/CarouselItem.jsx",

          "src/components/DropdownButton/DropdownButton.jsx",
          "src/components/SplitButton/SplitButton.jsx",

          "src/components/Dropdown/Dropdown.jsx",
          "src/components/DropdownHeader/DropdownHeader.jsx",
          "src/components/DropdownButton/DropdownButton.jsx",
          "src/components/DropdownItem/DropdownItem.jsx",
          "src/components/DropdownItemText/DropdownItemText.jsx",
          "src/components/DropdownDivider/DropdownDivider.jsx",
          "src/components/DropdownMenu/DropdownMenu.jsx",
          "src/components/DropdownToggle/DropdownToggle.jsx",

          "src/components/ListGroup/ListGroup.jsx",
          "src/components/ListGroupItem/ListGroupItem.jsx",

          "src/components/Modal/Modal.jsx",
          "src/components/ModalBody/ModalBody.jsx",
          "src/components/ModalDialog/ModalDialog.jsx",
          "src/components/ModalTitle/ModalTitle.jsx",
          "src/components/ModalHeader/ModalHeader.jsx",
          "src/components/ModalFooter/ModalFooter.jsx",

          "src/components/Nav/Nav.jsx",
          "src/components/NavDropdown/NavDropdown.jsx",
          "src/components/NavItem/NavItem.jsx",
          "src/components/NavLink/NavLink.jsx",


          "src/components/Navbar/Navbar.jsx",
          "src/components/NavbarCollapse/NavbarCollapse.jsx",
          "src/components/NavbarBrand/NavbarBrand.jsx",
          "src/components/NavbarOffcanvas/NavbarOffcanvas.jsx",
          "src/components/NavbarToggle/NavbarToggle.jsx",
          "src/components/NavbarText/NavbarText.jsx",


          "src/components/Offcanvas/Offcanvas.jsx",
          "src/components/OffcanvasBody/OffcanvasBody.jsx",
          "src/components/OffcanvasHeader/OffcanvasHeader.jsx",
          "src/components/OffcanvasTitle/OffcanvasTitle.jsx",


          "src/components/Pagination/Pagination.jsx",
          "src/components/PageItem/PageItem.jsx",

          // NOT WORKING

          // "src/components/Tooltip/Tooltip.jsx",
          // "src/components/PopoverBody/PopoverBody.jsx",
          // "src/components/Popover/Popover.jsx",
          // // "src/components/PopoverHeader/PopoverHeader.jsx",
          // "src/components/Overlay/Overlay.jsx",
          // "src/components/OverlayTrigger/OverlayTrigger.jsx",

        ]
      },
      {
        name: 'General',
        include: [
          // 'src/components/h1/h1.jsx',
          // 'src/components/Heading/Heading.jsx',
          // 'src/components/Accordion/Accordion.jsx',
          // 'src/components/AccordionBody/AccordionBody.jsx',

          // 'src/components/AccordionButton/AccordionButton.jsx',
          // 'src/components/AccordionCollapse/AccordionCollapse.jsx',
          // 'src/components/AccordionHeader/AccordionHeader.jsx',
          // 'src/components/AccordionItem/AccordionItem.jsx',


          // 'src/components/Alert/Alert.jsx',
          // "src/components/AlertLink/AlertLink.jsx",
          // "src/components/AlertHeading/AlertHeading.jsx",
          // 'src/components/Badge/Badge.jsx',

          // // "src/components/AbstractModalHeader/AbstractModalHeader.jsx",

          // "src/components/Breadcrumb/Breadcrumb.jsx",
          // "src/components/BreadcrumbItem/BreadcrumbItem.jsx",
          // "src/components/ButtonGroup/ButtonGroup.jsx",
          // "src/components/ButtonToolbar/ButtonToolbar.jsx",
          // "src/components/Card/Card.jsx",
          // "src/components/CardBody/CardBody.jsx",
          // "src/components/CardFooter/CardFooter.jsx",
          // "src/components/CardGroup/CardGroup.jsx",
          // "src/components/CardHeader/CardHeader.jsx",
          // "src/components/CardImg/CardImg.jsx",
          // "src/components/CardImgOverlay/CardImgOverlay.jsx",
          // "src/components/CardLink/CardLink.jsx",
          // "src/components/CardSubtitle/CardSubtitle.jsx",
          // "src/components/CardTitle/CardTitle.jsx",
          // "src/components/CardText/CardText.jsx",
          // "src/components/Carousel/Carousel.jsx",
          // "src/components/CarouselCaption/CarouselCaption.jsx",
          // "src/components/CarouselItem/CarouselItem.jsx",
          "src/components/CloseButton/CloseButton.jsx",
          "src/components/Collapse/Collapse.jsx",
          // "src/components/Col/Col.jsx",
          // "src/components/Container/Container.jsx",
          // "src/components/DropdownHeader/DropdownHeader.jsx",
          // "src/components/DropdownButton/DropdownButton.jsx",
          // "src/components/Dropdown/Dropdown.jsx",
          // "src/components/DropdownItem/DropdownItem.jsx",
          // "src/components/DropdownItemText/DropdownItemText.jsx",
          // "src/components/DropdownDivider/DropdownDivider.jsx",
          // "src/components/DropdownMenu/DropdownMenu.jsx",
          // "src/components/DropdownToggle/DropdownToggle.jsx",
          // "src/components/map/map.jsx",
          "src/components/Fade/Fade.jsx",
          "src/components/Feedback/Feedback.jsx",
          "src/components/Figure/Figure.jsx",
          "src/components/FigureCaption/FigureCaption.jsx",
          "src/components/FigureImage/FigureImage.jsx",
          "src/components/FloatingLabel/FloatingLabel.jsx",
          // "src/components/Image/Image.jsx",

          // "src/components/Form/Form.jsx",
          // "src/components/FormCheckInput/FormCheckInput.jsx",
          // "src/components/FormCheck/FormCheck.jsx",
          // "src/components/FormCheckLabel/FormCheckLabel.jsx",
          // "src/components/FormControl/FormControl.jsx",
          // "src/components/FormGroup/FormGroup.jsx",
          // "src/components/FormFloating/FormFloating.jsx",
          // "src/components/FormLabel/FormLabel.jsx",
          // "src/components/FormRange/FormRange.jsx",
          // "src/components/FormText/FormText.jsx",
          // "src/components/FormSelect/FormSelect.jsx",
          // "src/components/InputGroup/InputGroup.jsx",
          // "src/components/InputGroupText/InputGroupText.jsx",
          // "src/components/ListGroup/ListGroup.jsx",
          // "src/components/ListGroupItem/ListGroupItem.jsx",
          // "src/components/ModalBody/ModalBody.jsx",
          // "src/components/Modal/Modal.jsx",
          // "src/components/ModalDialog/ModalDialog.jsx",
          // "src/components/ModalTitle/ModalTitle.jsx",
          // "src/components/ModalHeader/ModalHeader.jsx",
          // "src/components/ModalFooter/ModalFooter.jsx",
          // "src/components/Nav/Nav.jsx",
          // "src/components/NavDropdown/NavDropdown.jsx",
          // "src/components/NavItem/NavItem.jsx",
          // "src/components/NavLink/NavLink.jsx",
          // "src/components/Navbar/Navbar.jsx",
          // "src/components/NavbarCollapse/NavbarCollapse.jsx",
          // "src/components/NavbarBrand/NavbarBrand.jsx",
          // "src/components/NavbarOffcanvas/NavbarOffcanvas.jsx",
          // "src/components/NavbarToggle/NavbarToggle.jsx",



          // "src/components/Offcanvas/Offcanvas.jsx",
          // "src/components/OffcanvasBody/OffcanvasBody.jsx",
          // "src/components/OffcanvasHeader/OffcanvasHeader.jsx",
          // "src/components/OffcanvasTitle/OffcanvasTitle.jsx",
          // "src/components/OffcanvasToggling/OffcanvasToggling.jsx",
          // "src/components/Overlay/Overlay.jsx",
          // "src/components/OverlayTrigger/OverlayTrigger.jsx",
          // "src/components/Pagination/Pagination.jsx",
          // "src/components/PageItem/PageItem.jsx",
          "src/components/Placeholder/Placeholder.jsx",
          // "src/components/PopoverBody/PopoverBody.jsx",
          // "src/components/Popover/Popover.jsx",
          // "src/components/PopoverHeader/PopoverHeader.jsx",

          "src/components/PlaceholderButton/PlaceholderButton.jsx",
          "src/components/Ratio/Ratio.jsx",
          "src/components/ProgressBar/ProgressBar.jsx",
          // "src/components/Row/Row.jsx",
          // "src/components/Spinner/Spinner.jsx",
          // "src/components/SplitButton/SplitButton.jsx",
          "src/components/Switch/Switch.jsx",
          // "src/components/Stack/Stack.jsx",
          "src/components/TabContent/TabContent.jsx",
          "src/components/TabPane/TabPane.jsx",
          "src/components/TabContainer/TabContainer.jsx",
          "src/components/Table/Table.jsx",
          "src/components/ThemeProvider/ThemeProvider.jsx",
          "src/components/Toast/Toast.jsx",
          "src/components/Tabs/Tabs.jsx",
          "src/components/ToastBody/ToastBody.jsx",
          "src/components/ToastContainer/ToastContainer.jsx",
          "src/components/ToastFade/ToastFade.jsx",
          "src/components/ToastHeader/ToastHeader.jsx",
          // "src/components/Tooltip/Tooltip.jsx",
          // "src/components/ToggleButton/ToggleButton.jsx",
          // "src/components/ToggleButtonGroup/ToggleButtonGroup.jsx",
          "src/components/TransitionWrapper/TransitionWrapper.jsx"


        ]
      }
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: 'React-Bootstrap-UXPin-Merge',
};
