import React from 'react';

// Components
import DataBlock from './DataBlock';

const RenderValue = ({ subChainData }) => {
  let val = JSON.stringify(subChainData).replace(/[{",}]/g, '')

  switch(true) {
    case (val === 'live'):
      return (
        <div className="capitalize">
          {val}
             <span className="mx-1 relative inline-flex rounded-full h-3 w-3 bg-emerald-500"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span></span>
        </div>
      );
    case ((/^genesis_url/).test(val)):
      return (
        <DataBlock data={(
          <a href={subChainData.genesis_url} target="_blank" rel="noreferrer" className="hover:bg-emerald-800">
            {subChainData.genesis_url}
          </a>
        )}/>
      );
    case ((/^git_repo|binaries/).test(val)):
      return (
        <div>
          <div className="px-2 mb-1">GitHub Repo:</div>
          {(subChainData.git_repo) ? (
            <DataBlock data={(
              <a href={subChainData.git_repo} target="_blank" rel="noreferrer" className="hover:bg-emerald-800">
                {subChainData.git_repo}
              </a>
            )}/>
          ) : (
            <DataBlock data="not listed" />
          )}
          <div className="px-2 mb-1 mt-5">Binaries:</div>
          {(subChainData.binaries) ? (
            <DataBlock data=
              {Object.keys(subChainData.binaries).map((el) => (
                <div>{el}:&nbsp;
                  <a href={String(subChainData.binaries[el])} target="_blank" rel="noreferrer" className="hover:bg-emerald-800">
                    {String(subChainData.binaries[el])}
                  </a>
                </div>
              ))}
            />
          ) : (
            <DataBlock data="none listed" />
          )}
        </div>
      );
    case ((/^seeds|persistent_peers/).test(val)):
      return (
        <div>
          <div className="px-2 mb-1">Seeds:</div>
          {(subChainData.seeds) ? (
            <DataBlock data=
              {Object.keys(subChainData.seeds).map((el, i, ar) => (
                <div className="inline-block">
                  {String(subChainData.seeds[el].address)}{(i + 1 === ar.length) ? (<span>&nbsp;</span>) : (<span>,&nbsp;</span>)}
                </div>
              ))}
            />
          ) : (
            <DataBlock data="none listed" />
          )}
          <div className="px-2 mb-1 mt-5">Persistent Peers:</div>
          {(subChainData.persistent_peers) ? (
            <DataBlock data=
              {Object.keys(subChainData.persistent_peers).map((el, i, ar) => (
                <div className="inline-block">
                  {String(subChainData.persistent_peers[el].address)}{(i + 1 === ar.length) ? (<span>&nbsp;</span>) : (<span>,&nbsp;</span>)}
                </div>
              ))}
            />
          ) : (
            <DataBlock data="none listed" />
          )}
        </div>
      );
      case ((/^rpc|rest|grpc/).test(val)):
        return (
          <div>
            <div className="px-2 mb-1">RPC:</div>
            {(subChainData.rpc) ? (
              <DataBlock data=
                {Object.keys(subChainData.rpc).map((el, i, ar) => (
                  <div className="inline-block">
                    <a href={String(subChainData.rpc[el].address)} target="_blank" rel="noreferrer" className="hover:bg-emerald-800">
                      {String(subChainData.rpc[el].address)}
                    </a>
                    {(i + 1 === ar.length) ? (<span>&nbsp;</span>) : (<span>,&nbsp;</span>)}
                  </div>
                ))}
              />
            ) : (
              <DataBlock data="none listed" />
            )}
            <div className="px-2 mb-1 mt-5">REST:</div>
            {(subChainData.rest) ? (
              <DataBlock data=
                {Object.keys(subChainData.rest).map((el, i, ar) => (
                  <div className="inline-block">
                    <a href={String(subChainData.rest[el].address)} target="_blank" rel="noreferrer" className="hover:bg-emerald-800">
                      {String(subChainData.rest[el].address)}
                    </a>
                    {(i + 1 === ar.length) ? (<span>&nbsp;</span>) : (<span>,&nbsp;</span>)}
                  </div>
                ))}
              />
            ) : (
              <DataBlock data="none listed" />
            )}
             <div className="px-2 mb-1 mt-5">gRPC:</div>
            {(subChainData.grpc) ? (
              <DataBlock data=
                {Object.keys(subChainData.grpc).map((el, i, ar) => (
                  <div className="inline-block">
                    <a href={String(subChainData.grpc[el].address)} target="_blank" rel="noreferrer" className="hover:bg-emerald-800">
                      {String(subChainData.grpc[el].address)}
                    </a>
                    {(i + 1 === ar.length) ? (<span>&nbsp;</span>) : (<span>,&nbsp;</span>)}
                  </div>
                ))}
              />
            ) : (
              <DataBlock data="none listed" />
            )}
          </div>
        );
    case ((/^kind|tx_page/).test(val)):
      return (
        <div className="capitalize">
          {Object.keys(subChainData).map((el, i, ar) => (
            <div className="inline-block">
              <div>
                <a href={String(subChainData[el].url)} target="_blank" rel="noreferrer" className="hover:text-emerald-200 hover:underline">
                  {String(subChainData[el].kind)}
                </a>
                {(i + 1 === ar.length) ? (<span>&nbsp;</span>) : (<span>,&nbsp;</span>)}
              </div>
            </div>
          ))}
        </div>
      );
    default:
      return (
        <div>
          {val}
        </div>
      );
  }
}

export default RenderValue;