import React from 'react';
import { classes, templates } from 'core/js/reactHelpers';
import Adapt from 'core/js/adapt';
import { useModelProp } from '../js/utils';

export default function DiagnosticChoice(props) {

  const strings = Adapt.course.get('_globals')._components._diagnosticChoice;
  const diagnosticOptOut = useModelProp(Adapt.diagnostic, '_diagnosticOptOut');
  const hasUserChosen = _.isBoolean(diagnosticOptOut);

  const onOptIn = () => {
    Adapt.diagnostic.diagnosticOptIn();
  };

  const onOptOut = () => {
    Adapt.diagnostic.diagnosticOptOut();
  };

  const onOptInNavigation = () => {
    Adapt.diagnostic.optInNavigation();
  };

  const onOptOutNavigation = () => {
    Adapt.diagnostic.optOutNavigation();
  };

  return (
    <div className="component__inner diagnosticChoice__inner">
      <templates.header {...props} />

      <button
        className={classes([
          'btn-text',
          hasUserChosen && 'is-disabled',
          diagnosticOptOut === false && 'is-selected'
        ])}
        disabled={hasUserChosen}
        onClick={onOptIn}
      >
        {strings._buttons._optIn.label}
      </button>

      <button
        className={classes([
          'btn-text',
          hasUserChosen && 'is-disabled',
          diagnosticOptOut === true && 'is-selected'
        ])}
        disabled={hasUserChosen}
        onClick={onOptOut}
      >
        {strings._buttons._optOut.label}
      </button>

      {hasUserChosen && diagnosticOptOut === false &&
        <button
          className={classes([
            'btn-text'
          ])}
          onClick={onOptInNavigation}
        >
          {strings._buttons._optInNavigation.label}
        </button>
      }

      {hasUserChosen && diagnosticOptOut === true &&
        <button
          className={classes([
            'btn-text'
          ])}
          onClick={onOptOutNavigation}
        >
          {strings._buttons._optOutNavigation.label}
        </button>
      }
    </div>
  );
}
