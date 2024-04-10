import React, { lazy, Suspense } from 'react';
import PageHeader from '../../shared/layout-components/page-header/page-header';
import Seo from '../../shared/layout-components/seo/seo';

// Importing components using lazy loading
const LazyAccordionWizardForm = lazy(() => import('../../shared/data/forms/formwizards').then(mod => ({ default: mod.AccordionWizardForm })));
const LazyVerticalLinearStepper = lazy(() => import('../../shared/data/forms/formwizards').then(mod => ({ default: mod.VerticalLinearStepper })));
const LazyWizardForm = lazy(() => import('../../shared/data/forms/formwizards').then(mod => ({ default: mod.WizardForm })));

const FormWizards = () => {
  return (
    <div>
      <Seo title="Form Wizards" />
      <PageHeader title="Form wizard" item="Forms" active_item="Form wizard" />

      <div className="row row-sm">
        <div className="col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1">Basic Stepper</h6>
                <p className="text-muted card-sub-title">
                  Below is an example of a basic horizontal form wizard.
                </p>
              </div>
              <div id="wizard1">
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyAccordionWizardForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-sm">
        <div className="col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1">Validator Form Wizard</h6>
                <p className="text-muted card-sub-title">
                  A basic content wizard with vertical orientation.
                </p>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyWizardForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-sm">
        <div className="col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body accordion-wizard">
              <div>
                <h6 className="main-content-label mb-1">Accordion Wizard</h6>
                <p className="text-muted card-sub-title">
                  A basic content wizard with vertical orientation.
                </p>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyVerticalLinearStepper />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormWizards.layout = "Contentlayout";

export default FormWizards;
