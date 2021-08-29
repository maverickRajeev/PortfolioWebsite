import React from "react";
import {
  SubmitButton,
  Row,
  Column25,
  Column75,
  Input,
  Textarea,
  Label,
} from "./ContactStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subject: "",
      email: "",
      message: "",
    };
  }
  lastSection = {
    marginLeft: 30,
    "@media(max-width:500)": {
      backgroundColor: "red",
    },
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onSubjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  resetForm = () => {
    this.setState({ name: "", subject: "", email: "", message: "" });
  };

  render() {
    return (
      <Section id="contact">
        <SectionDivider style={this.lastSection} />
        <SectionTitle main style={this.lastSection}>
          Get in Touch
        </SectionTitle>

        <form
          id="contact-form"
          onSubmit={this.handleSubmit}
          method="POST"
          style={this.lastSection}
        >
          <Row className="form-group">
            <Column25>
              <Label htmlFor="name">Name :</Label>
            </Column25>
            <Column75>
              <Input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.onNameChange}
                required
              />
            </Column75>
          </Row>

          <Row className="form-group">
            <Column25>
              <Label htmlFor="subject">Subject :</Label>
            </Column25>
            <Column75>
              <Input
                type="text"
                className="form-control"
                placeholder="enter your subject"
                value={this.state.subject}
                onChange={this.onSubjectChange}
                required
              />
            </Column75>
          </Row>
          <Row className="form-group">
            <Column25>
              <Label htmlFor="exampleInputEmail1">Email :</Label>
            </Column25>
            <Column75>
              <Input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange}
                required
              />
            </Column75>
          </Row>
          <Row className="form-group">
            <Column25>
              <Label htmlFor="message">Message :</Label>
            </Column25>
            <Column75>
              <Textarea
                className="form-control"
                rows="5"
                placeholder="type your message here...."
                value={this.state.message}
                onChange={this.onMessageChange}
                required
              />
            </Column75>
          </Row>
          <SubmitButton
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </SubmitButton>
        </form>
      </Section>
    );
  }
}

export default Contact;
