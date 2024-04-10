import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Bar, Line, PolarArea, Radar } from 'react-chartjs-2';
import * as chart from '../../shared/data/chart/chat'; // Assuming the path is correct
import Seo from '../../shared/layout-components/seo/seo';
import PageHeader from '../../shared/layout-components/page-header/page-header';

const Chartjs = () => {
  return (
    <div>
      <Seo title="Chartjs" />
      <PageHeader title="ChartJs Charts" item="Charts" active_item="ChartJs Charts" />

      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="card-body">
              <div>
                <h6 className="main-content-label mb-1">Line Chart</h6>
                <p className="text-muted  card-sub-title">Below is the basic line chart example.</p>
              </div>
              <div className="chartjs-wrapper-demo">
                <Line options={chart.Linechart} data={chart.linechartdata} className="barchart" height="250" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Bar Chart1</h6>
                <p className="text-muted  card-sub-title">Below is the basic bar chart example.</p>
              </div>
              <div className="chartjs-wrapper-demo">
                <Bar options={chart.Barchart1} data={chart.barchart1data} className="barchart" height="250" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Bar Chart2</h6>
                <p className="text-muted  card-sub-title">Below is the basic bar chart example.</p>
              </div>
              <div className="chartjs-wrapper-demo">
                <Bar options={chart.Barchart2} data={chart.barchart2data} className="barchart" height="250" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Area Chart</h6>
                <p className="text-muted  card-sub-title">Below is the basic area chart example.</p>
              </div>
              <div className="chartjs-wrapper-demo">
                <Line options={chart.Areachart} data={chart.areachart} className="barchart" height="250" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Radar Chart</h6>
                <p className="text-muted  card-sub-title">Below are an example of data in a radar chart.</p>
              </div>
              <div className="chartjs-wrapper-demo">
                <Radar data={chart.Radarchart1} className="chartjs-render-monitor w-auto ht-250 m-auto" height="120" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Polar Chart</h6>
                <p className="text-muted  card-sub-title">Below are an example of data in a polar chart.</p>
              </div>
              <div className="chartjs-wrapper-demo">
                <PolarArea data={chart.Polarchart1} className="chartjs-render-monitor w-auto ht-250 m-auto" height="120" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

Chartjs.layout = 'Contentlayout';

export default Chartjs;
