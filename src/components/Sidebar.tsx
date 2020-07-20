import {
  EuiCollapsibleNavGroup,
  EuiSpacer,
  EuiButton,
  EuiCollapsibleNav,
  EuiListGroup,
  EuiPinnableListGroup,
} from '@elastic/eui'
import { useRouter } from 'next/router'

const MenuItems = {
  'Data Upload': {
    iconType: 'dashboardApp',
    listItems: [],
    title: 'Data Upload',
    path: 'data-upload',
  },
  'Unit Economics': {
    listItems: [
      { label: 'Quality of Customers Report', path: 'quality' },
      { label: 'Segmentation Analysis', path: 'segmentation' },
    ],
    iconType: 'lensApp',
    title: 'Unit Economics',
    path: 'unit-economics',
  },
  Forecasts: {
    iconType: 'visualizeApp',
    listItems: [
      { label: 'Customer Acquision Model' },
      { label: 'Forecast Report' },
    ],
    title: 'Forecasts',
    path: 'forecasts',
  },
  Valuation: {
    iconType: 'metricbeatApp',
    listItems: [
      { label: 'Assumptions' },
      { label: 'Baseline Valuation' },
      { label: 'Simulator' },
      { label: 'Sensitivity' },
    ],
    title: 'Valuation',
    path: 'valuation',
  },
  'Advanced Modeling': {
    iconType: 'advancedSettingsApp',
    listItems: [
      { label: 'Assumptions' },
      { label: 'Baseline Valuation' },
      { label: 'Simulator' },
      { label: 'Sensitivity' },
    ],
    title: 'Advanced Modeling',
    path: 'advanced-modeling',
  },
}

const TopSection = () => (
  <EuiCollapsibleNavGroup
    title={
      <span>
        <small style={{ fontWeight: 'normal' }}>Nike</small> <br />
        <strong>Peter Fader</strong>
      </span>
    }
    iconType="logoGCPMono"
    iconSize="xl"
    isCollapsible={true}
    initialIsOpen={false}
    background="dark"
  >
    <div role="group" className="kibanaNavDeployment__content">
      <EuiListGroup
        listItems={[
          {
            label: 'combining-binaries',
            iconType: 'logoAzureMono',
            size: 's',
          },
          {
            label: 'stack-monitoring',
            iconType: 'logoAWSMono',
            size: 's',
          },
        ]}
        flush
      />
      <EuiSpacer size="s" />
      <EuiButton color="ghost" fullWidth>
        Manage deployments
      </EuiButton>
    </div>
  </EuiCollapsibleNavGroup>
)

export default function Sidebar() {
  const router = useRouter()

  return (
    <EuiCollapsibleNav isDocked>
      <TopSection />
      {Object.entries(MenuItems).map(([title, dropdown]) => {
        return (
          // @ts-ignore
          <EuiCollapsibleNavGroup
            key={'sidebar-item-' + dropdown.path}
            title={title}
            iconType={dropdown.iconType}
            isCollapsible={!!dropdown.listItems.length}
            initialIsOpen={false}
          >
            {!!dropdown.listItems.length && (
              <EuiListGroup
                // clone the list of items, and add a trigger than happens when it gets clicked
                listItems={dropdown.listItems?.map(listItem => ({
                  ...listItem,
                  onClick: () => {
                    // here we can add code that happens when this item is clicked.

                    // for example, navigate to the page that corresponds to this link.
                    // such as unit-economics/quality
                    // this navigates to that page.
                    // to edit that page, go to the file src/pages/unit-economics/quality, and edit the code.
                    if (dropdown.path && listItem.path) {
                      router.push(`/${dropdown.path}/${listItem.path}`)
                    }
                  },
                }))}
                maxWidth="none"
                color="subdued"
                gutterSize="none"
                size="s"
              />
            )}
          </EuiCollapsibleNavGroup>
        )
      })}
    </EuiCollapsibleNav>
  )
}
